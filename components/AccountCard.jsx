export default function AccountCard({ account }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{account.name || account.id}</h5>
        <pre className="card-text small mb-0">{JSON.stringify(account, null, 2)}</pre>
      </div>
    </div>
  );
}
