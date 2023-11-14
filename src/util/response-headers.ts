
export const getPaginationHeaders = (res: Response) => {
    return {
        xWpTotal: parseInt(res.headers.get("x-wp-total") ?? "-1"),
        xWpTotalPages: parseInt(res.headers.get("x-wp-totalpages") ?? "-1")
    }
}