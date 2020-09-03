// external
import React, { useEffect, useRef, useState } from 'react';
// internal
import pauseSvg from '../../asserts/img/pause.svg';
import playSvg from '../../asserts/img/play.svg';
import waveSvg from '../../asserts/img/wave.svg';
import { convertTime } from '../../utils/helpers';

const MessageAudio = ({ audioSrc, className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const audioElem = useRef(null);
    const progressElem = useRef(null);
    let timer = null;

    const updateProgress = (event) => {
        timer = setInterval(() => {
            let percent = audioElem.current.currentTime / event.target.duration * 100;

            progressElem.current.style.width = `${percent}%`;
        }, 100);
    };

    useEffect(() => {
        audioElem.current.addEventListener('playing', (event) => {
            setIsPlaying(true);

            updateProgress(event);
        });

        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false);
            progressElem.current.style.width = `0%`;
            clearInterval(timer);
        });

        audioElem.current.addEventListener('pause', () => {
            setIsPlaying(false);
            clearInterval(timer);
        });

        audioElem.current.onloadedmetadata=()=>setDuration(audioElem.current.duration)

        return () => clearInterval(timer);
    });

    return (
        <div className={ className }>
            <audio ref={ audioElem } src={ audioSrc }  volume='0.1' preload="metadata"/>
            <div ref={ progressElem } className='message__audio-progress'></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={ () => isPlaying ? audioElem.current.pause() : audioElem.current.play() }>
                        <img src={ isPlaying ? pauseSvg : playSvg } alt="Play svg"/>
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={ waveSvg } alt="Wave svg"/>
                </div>
                <span className="message__audio-duration">{ convertTime(duration) }</span>
            </div>

        </div>
    );
};

export default MessageAudio;