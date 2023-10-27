'use client';
import { useState } from 'react';
import '../styles/comment.css';
import ReplyComment from './ReplyComment';

export default function Comment(props: any) {
    const [hidden, setHidden] = useState(false);
    const [replyBox, setReplyBox] = useState(false);
    const [replies, setReplies] = useState<string[]>([]);
    const [message, setMessage] = useState('');

    function hideComment() {
        var cmt = document.getElementById(props.id);
        var hide = document.getElementById("hide");

        if (cmt && hide) {
            if (hidden) {
                cmt.classList.remove("hide-comment");
                hide.style.background = 'url("/static/images/hide.svg") transparent no-repeat';
                setHidden(false);
            } else {
                cmt.classList.add("hide-comment");
                hide.style.background = 'url("/static/images/show.svg") transparent no-repeat';
                setHidden(true);
            }
        }
    }

    function enableReply() {
        var replyButton = document.getElementById("reply");

        if (replyButton) {
            replyButton.style.pointerEvents = "none";
            setReplyBox(true);
        }
    }

    function disableReply() {
        var replyButton = document.getElementById("reply");

        if (replyButton) {
            replyButton.style.pointerEvents = "all";
            setReplyBox(false);
        }
    }

    function submitRepy() {
        replies.push(message);
        setMessage('');
        setReplyBox(false);
    }

    return (
        <>
            <div id='comment-tread'>
                <div id={props.id} className={props.reply ? "reply-container" : "comment-container"} key={props.id}>
                    <h4>{props.user}</h4>
                    <h5>{props.time}</h5>

                    <button id="hide" className="hide-comment-btn" onClick={hideComment}></button>
                    <button id="reply" className="reply-btn" onClick={enableReply}>REPLY</button>

                    <p>{props.message}</p>
                </div>

                {replyBox &&
                    <div className='reply-input'>
                        <textarea placeholder='reply...' value={message} onChange={(e) => { setMessage(e.target.value) }} />

                        <button id='cancel-reply' onClick={() => { disableReply() }}>Cancel</button>
                        <button id='submit-reply' onClick={() => { submitRepy() }}>Submit</button>
                    </div>
                }

                {replies.map((reply) => {
                    return (
                        <span key={reply}>
                            <ReplyComment id={"1"} user={"Anonymous auptomus g"} time={"12:45 pm"} message={reply} />
                        </span>
                    )
                })}
            </div>
        </>
    )
}