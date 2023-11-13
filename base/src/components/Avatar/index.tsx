import "./styles.css";

type AvatarProps = {
    image: string,
    size?: number
}

export function Avatar({ image, size }: AvatarProps) {

    const sizeAvatar: number = size || 147;

    return (
        <div className="card">
            <img
                className="avatar"
                src={image}
                alt="avatar"
                style={{ width: `${sizeAvatar}px`, 
                height: `${sizeAvatar}px` }} />
        </div>
    )
}