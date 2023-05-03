interface Props {
    count: number
}

export function Project({count}: Props) {
    return (
        <div>A single project: {count}</div>
    );
}