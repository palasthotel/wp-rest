
export const getPaginationHeaders = (res: Response) => {
    return {
        total: parseInt(res.headers.get("x-wp-total") ?? "-1"),
        totalPages: parseInt(res.headers.get("x-wp-totalpages") ?? "-1")
    }
}