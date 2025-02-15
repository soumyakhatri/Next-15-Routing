import Link from "next/link";

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '1.5rem'
    },
    link: {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.2s',
        display: 'inline-block'
    }
} as const;

export default function F6() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>F6 Page</h1>
            <Link href="/f1/f2" replace style={styles.link}>F2</Link>
            <Link href="/f1/f7" replace style={styles.link}>F7</Link>
        </div>
    );
}