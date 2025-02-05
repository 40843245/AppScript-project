# notice
## applied
> [!WARNING]
> It will only applied to 

## data source
Data source is from [台灣證卷交易所](https://www.twse.com.tw/zh/index.html).

The fetched url is `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=202412&stockNo='+ticker`

where 

ticker is the stock ID.

## fetch failed due to security reason
> [!CAUTION]
> The script file fetch data from url remotely, thus it may fetch data failed due to security reason.
>
> ```
> 因為安全性考量，您所執行的頁面無法呈現，請關閉瀏覽器後重新嘗試，或聯絡客服。錯誤代碼為：N/A<BR>
> ```
>
> And cause the error at run time.
>
> <img width="519" alt="image" src="https://github.com/user-attachments/assets/bb0334b9-8b5a-496e-8374-ef07d95062a4" />
> 
> ```
> SyntaxError: Unexpected token '<', "<html>
> <he"... is not valid JSON
> ```
> 
> If you meet this error, visit and contact [台灣證卷交易所](https://www.twse.com.tw/zh/about/company/service-contact.html)

## other way 
If you fetch data failed, you can see plain text in 

```
https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=202412&stockNo='+ticker
```

where 

ticker is the stock ID.
