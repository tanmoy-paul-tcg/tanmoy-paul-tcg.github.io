import React from "react";

function Marquee({ text, link }) {
    if (!text) return null;

    return (
        <table className="marquee">
            <tbody>
            <tr>
            <td className="block">
                NEWS
            </td>
            <td>
                <marquee>
                    <a href={link || "#"} target="_blank" rel="noopener noreferrer">{text}</a>
                </marquee>
            </td>
            </tr>
            </tbody>
            <style>{`
                .marquee {
                    width: 100vw;
                    border-radius: 5px;
                    color: var(--tertiary-color);
                    background-color: var(--primary-color);
                    text-align: center;
                }
                
                .block {
                    background: var(--secondary-color);
                    border-radius: 5px;
                    padding: 5px 10px;
                    line-height: 18px;
                    font: 20px bold;
                    color: var(--primary-color);
                    margin: 0;
                }

                .marquee a {
                    text-decoration: none;
                    color: var(--tertiary-color);
                }

                .marquee a:hover {
                    text-decoration: none;
                    color: var(--secondary-color);
                }
            `}</style>
        </table>
    );
}

export default Marquee;