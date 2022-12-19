using System.ComponentModel.DataAnnotations;
using KlimaWatch.Data;

namespace KlimaWatch.Services;

public abstract class BaseService
{
    protected readonly KlimaWatchContext Context;

    protected BaseService(KlimaWatchContext context)
    {
        Context = context;
    }
}