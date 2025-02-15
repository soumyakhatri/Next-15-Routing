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
    linkContainer: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
    },
    link: {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.2s'
    }
} as const;

export default function F1() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>F1 Page</h1>
            <div style={styles.linkContainer}>
                <Link href="/f1/f2" style={styles.link}>F2</Link>
                <Link href="/f1/f2/f3" style={styles.link}>F3</Link>
                <Link href="/f1/f2/f3/f4" style={styles.link}>F4</Link>
            </div>
        </div>
    );
}